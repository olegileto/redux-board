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

    addNewCard = (cardObj) => {
        return fetch(`${this._apiBase}/cards`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cardObj)
        })
            .then((res) => {
                return res.json()
            })
            .catch((err) => console.error(err));
    };

    deleteCardById = (cardObj) => {
        return fetch(`${this._apiBase}/cards/${cardObj}`, {
            method: 'DELETE'
        })
            .then((res) => {
                return res.json();
            })
            .catch((err) => console.error(err))
    };

    editCardById = (cardObj) => {
        return fetch(`${this._apiBase}/cards/${cardObj.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cardObj)
        })
            .then((res) => {
                return res.json();
            })
            .catch((err) => console.error(err))
    };

    filterCardsByTitle = (cardObj) => {
      return fetch(`${this._apiBase}/cards?title=${cardObj}`, {
          method: 'GET'
      })
          .then((res) => {
              return res.json()
          })
          .catch((err) => console.error(err))
    };
}

