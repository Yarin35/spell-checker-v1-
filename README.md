# spell-checker-v1-
a simple spell-checker that will ensure every words send are well written

made with docker(/compose) so in order to run you have to make sure you have docker and docker-compose and curl to test (or any alternative like postman)

Usage:
- sudo docker-compose up --build (to start the container)
- open another terminal
- curl -X POST -H "Content-Type: application/json" -d '{"text": "this is an aple"}' http://localhost:3000/spellcheck (this is an exemple you can replace "this is an aple" by anything you wanna try and don't forget to adjust the adress "http://localhost:3000" if nedeed 😲).

in this case you will receive aple since it's the only misspelled word 😃.

🤫 soon will be the html front to have a better visual return.
