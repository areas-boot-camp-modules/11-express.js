const fs = require("fs")
jest.mock("fs")

const FileIO = require('../fileIO');

describe('FileIO', () => {
  describe('read', () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // TODO: Your code here
      const file = "test.txt"
      const fileIO = new FileIO()

      fs.readFileSync.mockReturnValue("test data")

      const result = fileIO.read(file)

      expect(result).toBe("test data")
    });
  });

  describe('write', () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // TODO: Your code here
      const file = "test.txt"
      const data = "some data"
      const fileIO = new FileIO()

      fileIO.write(file, data)

      expect(fs.writeFileSync).toHaveBeenCalledWith(file, data)
    });
  });
});
