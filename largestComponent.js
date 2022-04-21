const exploreSize = (graph, node, visited) => {
	// skip visited nodes, dont count size
	if (visited.has(node)) return 0

	// init size for component
	let size = 1
	//add first node of component
	visited.add(node)

	// iter through neighbors, each unexplored neighbor adds size of 1 to total
	for (let neighbor of graph[node]) {
		size += exploreSize(graph, String(neighbor), visited)
	}

	// return final size of component
	return size
}

const largestComponent = graph => {
	const visited = new Set()

	let longest = 0

	// iter through each node, exploreSize starting at first node
	for (let node in graph) {
		const size = exploreSize(graph, node, visited)
		// each time size is greater than longest, update
		if (size > longest) longest = size
	}

	return longest
}

const graph = {
	0: [8, 1, 5],
	1: [0],
	5: [0, 8],
	8: [0, 5],
	2: [3, 4],
	3: [2, 4],
	4: [3, 2],
}

console.log(largestComponent(graph)) // 4
