# [Raspberry Pi Dashboard]

## Build from sources

1. Clone the repo
  ```
  $ git clone https://github.com/jonlwowski012/RaspberryPiDashboard.git
  $ cd RaspberryPiDashboard
  ```

2. Install the dependencies:
  ```
  $ pip install -r requirements.txt
  ```

3. Run the development server:
  ```
  $ python app.py
  ```

4. Navigate to [http://localhost:5000](http://localhost:5000)

<br />

## Connection to Sensors

1. The graphs need to be updated using the variables in app/views.py in the function index(path). The variables can be found [here](https://github.com/jonlwowski012/RaspberryPiDashboard/blob/master/app/views.py#L40).

## Support

For issues and features request, use **Github**.
