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

const hasPath = (graph, source, dest, visited) => {
	if (source === dest) return true

	// if previously visited and wasn't true before, dont need to visit again
	if (visited.has(source)) return false
	//add current source to visited set
	visited.add(source)

	for (let neighbor of graph[source]) {
		// if neighbor has path to dest, so does source
		if (hasPath(graph, neighbor, dest, visited) === true) return true
	}

	return false
}

const undirectedPath = (edges, source, dest) => {
	const graph = buildGraph(edges)
	return hasPath(graph, source, dest, new Set())
}

const edges = [
	['i', 'j'],
	['k', 'i'],
	['m', 'k'],
	['k', 'l'],
	['o', 'n'],
]

console.log(undirectedPath(edges, 'o', 'j')) // false
console.log(undirectedPath(edges, 'm', 'j')) // true
