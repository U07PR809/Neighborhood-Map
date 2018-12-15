class Helper {
	static baseURL() {
		return "https://api.foursquare.com/v2";
	}

	static auth() {
		const credentials = {
			client_id: "TWO5XY1CQKBHSUYDP4EBPGFNH2T5MBS0TW0RAGN521BAGKXV",
			client_secret: "DA5WV4KT0BJR1CMQSCEX0S01HPWBRNTAUZNTPQ2SVQDZZNGI",
			v: "20181214"
		};

		return Object.keys(credentials)
			.map(credential => `${credential}=${credentials[credential]}`)
			.join("&");
	}

	static urlBuilder(urlParams) {
		if (!urlParams) {
			return "";
		} else {
			return Object.keys(urlParams)
				.map(key => `${key}=${urlParams[key]}`)
				.join("&");
		}
	}

	static headers() {
		return {
			Accept: "application/json"
		};
	}

	static simpleFetch(endPoint, method, urlParams) {
		let requestData = {
			method,
			headers: Helper.headers()
		};

		return fetch(
			`${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(
				urlParams
			)}`,
			requestData
		).then(res => res.json());
	}
}

class SquareAPI {
	static search(urlParams) {
		return Helper.simpleFetch("/venues/search", "GET", urlParams);
	}

	static getVenueDetails(VENUE_ID) {
		return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET");
	}

	// static getVenuePhotos ( VENUE_ID ) {
	// 	return Helper.simpleFetch( `/venues/${VENUE_ID}/photos`, "GET");
	// }
}

export default SquareAPI;
