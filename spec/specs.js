describe('wordOrder', function() {
  it("returns a word if it is found in a string", function(){
    expect(wordOrder("burrito")).to.eql(["burrito", 1]);
  });
});
