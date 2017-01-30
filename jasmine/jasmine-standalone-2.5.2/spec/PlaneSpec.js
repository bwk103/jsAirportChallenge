describe('Plane', function(){
  beforeEach(function() {
    plane = new Plane();
  });

  describe('is expected to', function(){
    it("respond to isFlying", function(){
      expect(typeof plane.isFlying).toBe("function")
    });

    it("confirm whether it's flying or bloody falling", function(){
      expect(plane.isFlying).toBeTruthy()
    });
  });
});
