export default class Services {
    _apiBase = 'http://localhost:3000';

    getApi = (url) => {
        return fetch(`${this._apiBase}${url}`)
            .then(res => {

                if (res.status === 200) {
                    return res.json()
                        .then(data => data);
                }

                return {
                    status: res.status
                }
            })
            .catch(err => console.error(err));
    };

    getAllLanes = () => {
        return this.getApi('/lanes/');

    };

    gerCardsByLane = (laneId) => {
        return this.getApi(`/cards?laneId=${laneId}`);
    };

    getAllCards = () => {
        return this.getApi(`/cards/`);
    };

    changeCardsLaneId = (laneId, cardObj) => {
        return fetch(`${this._apiBase}/cards/${cardObj.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...cardObj,
                "laneId": parseInt(laneId, 10)
            })
        })
            .then((res) => {
                return res.json()
            })
            .catch((err) => console.error(err))
    };
}

