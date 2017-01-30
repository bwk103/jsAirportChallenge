describe('Airport', function(){
  beforeEach(function() {
    airport = new Airport();
  });
  describe('is expected to', function(){
    it("respond to land", function(){
      expect(airport).not.toThrowError();
    });

  });

});
