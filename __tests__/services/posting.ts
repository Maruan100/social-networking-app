import { posting } from "../../src/services/posting";

jest.mock("../../src", () => ({
    ...jest.requireActual("../../src"),
    main: jest.fn(),
}));

describe("Posting", () => {
    let logSpy: jest.SpyInstance;

    beforeEach(() => {
        logSpy = jest.spyOn(console, "log").mockImplementation(() => { });
    });

    afterEach(() => {
        logSpy.mockRestore();
    });

    it("should log an error for empty input", async () => {
        const emptyInput = "";

        await posting(emptyInput);

        expect(logSpy).toHaveBeenCalledWith(
            "\x1b[31m%s\x1b[0m",
            "Error: Invalid format. Use 'user name -> text'"
        );
    });

    it("should log an error for invalid input format", async () => {
        const invalidInput = "invalid input format";

        await posting(invalidInput);

        expect(logSpy).toHaveBeenCalledWith("\x1b[31m%s\x1b[0m", "Error: Invalid format. Use 'user name -> text'");
    });

    it("should log the input message when input is valid", async () => {
        const validInput = "Alice -> I love the weather today";
        const expectedOutput = "I love the weather today (0 seconds ago)";

        await posting(validInput);

        expect(logSpy).toHaveBeenCalledWith(
            "\x1b[32m%s\x1b[0m",
            expectedOutput
        );
    }
    );
});