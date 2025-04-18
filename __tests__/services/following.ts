import { following } from "../../src/services/following";
import { posting } from "../../src/services/posting";

jest.mock("../../src", () => ({
    ...jest.requireActual("../../src"),
    main: jest.fn(),
}));

describe("Following", () => {
    let logSpy: jest.SpyInstance;

    beforeEach(() => {
        logSpy = jest.spyOn(console, "log").mockImplementation(() => { });
    });

    afterEach(() => {
        logSpy.mockRestore();
    });

    it("should log an error for empty input", async () => {
        const emptyInput = "";

        await following(emptyInput);

        expect(logSpy).toHaveBeenCalledWith(
            "\x1b[31m%s\x1b[0m",
            "Error: Invalid format. Use 'user name follows user to follow'"
        );
    });


    it("should log an error for user that does not exist", async () => {
        const invalidInput = "Bob follows Alice";

        await following(invalidInput);

        expect(logSpy).toHaveBeenCalledWith(
            "\x1b[31m%s\x1b[0m",
            "Error: User bob does not exist."
        );
    }
    );

    it("should log an error when trying to follow a user that does not exist", async () => {
        const validInput = "Alice follows Bob";
        const expectedOutput = "Error: User bob does not exist.";

        await posting("Alice -> I love the weather today");
        await following(validInput);

        expect(logSpy).toHaveBeenCalledWith(
            "\x1b[31m%s\x1b[0m",
            expectedOutput
        );
    }
    );
});