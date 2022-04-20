const hasPathDepth = (graph, source, dest) => {
	if (source === dest) return true

	for (let neighbor of graph[source]) {
		if (hasPath(graph, neighbor, dest) === true) {
			return true
		}
	}

	return false
}

const hasPathBreadth = (graph, source, dest) => {
	const queue = [source]

	while (queue.length > 0) {
		const current = queue.shift()
		if (current === dest) return true

		for (let neighbor of graph[current]) {
			queue.push(neighbor)
		}
	}

	return false
}

const graph = {
	f: ['g', 'i'],
	g: ['h'],
	h: [],
	i: ['g', 'k'],
	j: ['i'],
	k: [],
}

// console.log(hasPathDepth(graph, 'f', 'k')) // true
// console.log(hasPathDepth(graph, 'f', 'j')) // false

console.log(hasPathBreadth(graph, 'f', 'k')) // true
// console.log(hasPathBreadth(graph, 'f', 'j')) // false
