describe('Airport', function(){
  beforeEach(function() {
    airport = new Airport();
  });

  describe('is expected to', function(){
    it("respond to land", function(){
      expect(typeof airport.land).toBe("function")
    });

    it("respond to land - tBD", function(){
      expect(airport.land).toBeDefined()
    });
  });
});
