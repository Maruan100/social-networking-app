import { following } from "../../src/services/following";
import { posting } from "../../src/services/posting";
import { wall } from "../../src/services/wall";


jest.mock("../../src", () => ({
    ...jest.requireActual("../../src"),
    main: jest.fn(),
}));

describe("Wall", () => {
    let logSpy: jest.SpyInstance;

    beforeEach(() => {
        logSpy = jest.spyOn(console, "log").mockImplementation(() => { });
    });

    afterEach(() => {
        logSpy.mockRestore();
    });

    it("should log an error for empty input", async () => {
        const emptyInput = "";

        await wall(emptyInput);

        expect(logSpy).toHaveBeenCalledWith(
            "\x1b[31m%s\x1b[0m",
            "Error: Invalid format. Use 'user name wall'"
        );
    });

    it("should log an error for user that does not exist", async () => {
        const invalidInput = "Bob wall";

        await wall(invalidInput);

        expect(logSpy).toHaveBeenCalledWith(
            "\x1b[31m%s\x1b[0m",
            `Error: User bob does not exist.`
        );
    }
    );

    it("should log the users wall with own publications and follows publications", async () => {
        const validInput = "Bob wall";
        const expectedPosts = [
            "Alice - I love the weather today (0 seconds ago)",
            "Bob - Damn! We lost! (0 seconds ago)"
        ];

        await posting("Bob -> Damn! We lost!");
        await posting("Alice -> I love the weather today");
        await following("Bob follows Alice");

        await wall(validInput);
    
        expect(logSpy).toHaveBeenCalledWith(
            "\x1b[32m%s\x1b[0m",
            expectedPosts.join('\n')
        );
    }
    );
});