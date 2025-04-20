import { posting } from "../../src/services/posting";
import { reading } from "../../src/services/reading";

jest.mock("../../src", () => ({
    ...jest.requireActual("../../src"),
    main: jest.fn(),
}));

describe("Reading", () => {
    let logSpy: jest.SpyInstance;

    beforeEach(() => {
        logSpy = jest.spyOn(console, "log").mockImplementation(() => { });
    });

    afterEach(() => {
        logSpy.mockRestore();
    });

    it("should log an error for empty user name", async () => {
        const emptyInput = "";

        await reading(emptyInput);

        expect(logSpy).toHaveBeenCalledWith(
            "\x1b[31m%s\x1b[0m",
            "Error: Invalid format. Use 'user name'"
        );
    });

    it("should log an error for user that does not exist", async () => {
        const invalidInput = "Bob";

        await reading(invalidInput);

        expect(logSpy).toHaveBeenCalledWith(
            "\x1b[31m%s\x1b[0m",
            "Error: User bob does not exist."
        );
    }
    );

    it("should log reading posts for valid user name", async () => {
        const validInput = "Alice";
        const expectedOutput = "I love the weather today (0 seconds ago)";

        await posting("Alice -> I love the weather today");
        await reading(validInput);

        expect(logSpy).toHaveBeenCalledWith(
            "\x1b[32m%s\x1b[0m",
            expectedOutput
        );
    }
    );
});