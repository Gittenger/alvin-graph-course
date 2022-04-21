const buildGraph = edges => {
	const graph = {}

	for (let edge of edges) {
		const [a, b] = edge

		if (!(a in graph)) graph[a] = []
		if (!(b in graph)) graph[b] = []
		graph[a].push(b)
		graph[b].push(a)
	}

	return graph
}

const shortestPath = (edges, source, dest) => {
	const graph = buildGraph(edges)
	const visited = new Set([source])

	const queue = [[source, 0]]

	while (queue.length > 0) {
		const [node, distance] = queue.shift()

		if (node === dest) return distance

		for (let neighbor of graph[node]) {
			if (!visited.has(neighbor)) {
				visited.add(neighbor)
				queue.push([neighbor, distance + 1])
			}
		}
	}

	return -1
}

const edges = [
	['w', 'x'],
	['x', 'y'],
	['z', 'y'],
	['z', 'v'],
	['w', 'v'],
]

console.log(shortestPath(edges, 'v', 'x')) // 2
