const $imagesContainer = $('#imagesContainer');
const $searchInput = $('#searchInput');

function addGif(res) {
	let numResults = res.data.length;
	if (numResults) {
		let randomIdx = Math.floor(Math.random() * numResults);
		let $newCol = $('<div>', { class: 'col-md-4 col-12 mb-4' });
		let $newGif = $('<img>', {
			src: res.data[randomIdx].images.original.url,
			class: 'w-100'
		});
		$newCol.append($newGif);
		$imagesContainer.append($newCol);
	}
}

$('form').on('submit', async function (e) {
	e.preventDefault();

	let input = $searchInput.val();
	$searchInput.val('');

	const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
		params: {
			q: input,
			api_key: 'sp7R3oM0GK3HrXCDrEPYmQ33xrwlwC1X'
		}
	});
	addGif(response.data);
});

$('#remove').on('click', function () {
	$imagesContainer.empty();
});
