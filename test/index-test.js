describe("shout(string)", function () {
    it("receives on argument and returns it in all caps", function () {
        expect(shout("hello")).toEqual("HELLO");
    });
});