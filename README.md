## Tech Stack

**Client:** ReactJS,socket.io,socket.io-client

**Server:** Python3,eventlet,Flask-Cors,Flask-SocketIO

## Installation

```bash
  git clone https://github.com/iam7t9/ScoreBoard.git
```

- Navigate into the new sub-folder created called **ScoreBoard**.
- Run the following commands to create an environment and install the dependencies:

```bash
  python -m venv env
  .\env\Scripts\activate
  pip install -r requirements.txt
```

- Navigate into the /**front-end** folder and run the following command:

```bash
  npm install
```

## Run Locally

Open two terminal windows, one to be used by the Flask server and the other
to be used by the React client.

**Starting Flask Server**
```bash
  cd ScoreBoard
  .\env\Scripts\activate
  python server.py
```

**Starting React Server**
```bash
  cd ScoreBoard\front-end
  npm start
```
