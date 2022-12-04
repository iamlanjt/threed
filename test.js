var Ray = (await import('ray-3d')).default
var test = (await import('tape')).default

test('a high-level picking ray helper for 3D intersection', function(t) {
  var ray = new Ray()
  t.deepEqual(ray.origin, [0, 0, 0], 'default origin')
  t.deepEqual(ray.direction, [0, 0, -1], 'default direction')

  ray.set([ -1, -1, -1 ], [0, 2, 3])
  t.deepEqual(ray.origin, [-1, -1, -1], 'changes origin')
  t.deepEqual(ray.direction, [0, 2, 3], 'changes direction')


  ray.copy(new Ray([0, 0, 0], [5, 5, 5]))
  t.deepEqual(ray.origin, [0, 0, 0], 'copies origin')
  t.deepEqual(ray.direction, [5, 5, 5], 'copies direction')

  var r2 = ray.clone()
  t.notEqual(r2.origin, ray.origin, 'clones')
  t.notEqual(r2.direction, ray.direction, 'clones')
  t.deepEqual(r2.origin, ray.origin, 'clones')
  t.deepEqual(r2.direction, ray.direction, 'clones')

  var r3 = new Ray([0, 0, -1], [1, 1, 1])
  t.deepEqual(r3.intersectsTriangle([ [-16,16,0], [16,16,0], [-16,16,0] ]), true, 'intersection triangle')

  t.end()
})