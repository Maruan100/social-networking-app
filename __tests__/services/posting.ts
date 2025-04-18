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

         //posting(emptyInput);

        expect(logSpy).toHaveBeenCalledWith("Error: Invalid format. Use 'user name -> text'");
    });

    
    it("should log an error for invalid input format", async () => {
        const invalidInput = "invalid input format";

       //posting(invalidInput);

        expect(logSpy).toHaveBeenCalledWith("Error: Invalid format. Use 'user name -> text'");
    });


    it("should log the input message", async () => {
        const validInput = "Alice -> I love the weather today";
        const expectedOutput = "I love the weather today";

        //posting(validInput);

        expect(logSpy).toHaveBeenCalledWith(expectedOutput);
    })

})