//data set for populating champion selector icons
var champions = champions;
console.log(champions);

//for fighter, tank etc.  champions.data.<champion>.tags - Array of Strings ['Fighter', 'Tank']


//svg for the champion filter
var champSvg = d3.select('#Champions')

champSvg.attr({
  width: 1000,
  height: 1000
})

//127 champions, 12 per row, 11 rows, 6 on the last row

//group for champion circles
var g = champSvg.append('g');
g.attr('transform', 'translate(0, -50)');

var data = champions;
//create scale after defining data set
//yScale var yScale = d3.scale.linear().domain().range()
var xScale = d3.scale.linear()
  .domain([0, data.length])
  .range([10, 1000]);

var oScale = d3.scale.ordinal()
  .domain([0, data.length])
  .rangeBands([100, 1000])

//add some defs for image placement with circles
// champSvg.append('defs').selectAll('')

//create champion circles based off of our initial unfiltered champion list
var champCircles = g.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr({
    cx: function(d, i) {
      i = i - Math.floor(i/12) * 12;
      //12 items per row
      var startX = 60 + i * 12;
      //reset x position based off of something
      return startX;
      // return xScale(i);
    },
    cy: function(d, i) {
      var startY = 60;
      return startY + 100 * (1 + Math.floor(i/12));
    },
    r: 30,
    'xlink:href': function(d, i) { return d.image; },
    //TODO: provide gray out logic if filters are in place
    //if champion filters array has anything 
    'background-color': 'blue'
  })
  .on('mouseover', function(d, i) {
    console.log(d.name)
  })

var posts = d3.select('#Posts');
posts.attr({
  x: 1000,
  y: 1000
});

posts.append('svg:image')
  // .data(data)
  // .enter()
  .attr({
    cx: function(d, i) { return 100 + i * 10},
    cy: 30,
    r: 10,
    'xlink:href': function(d, i) { return d.image; }
  })


console.log('Champ circles: ', champCircles);