# Comparing NM Dev with other libraries

This Maven repository compares the timings on various operations of the NM Dev and other libraries. A previously generated webpage `NM-final-plot.html` is saved for reference in the `benchmark` folder.



## How to run

**How to setup and run the Maven project on NetBeans-**

1. Create a Maven project with the `benchmark`  folder on NetBeans.
2. Build and run the project. If there are build errors, check that the NetBeans Maven settings does not block `http` repository URLs.
3. The output should display the various tests being run. In the end, the results are saved in the `record` folder in the `benchmark` directory. 



**How to generate HTML plot (new code - using D3 and chart.js library)-**

The `benchmark\src\main\webapp\new_plot` contains all the code to generate plots.

1. Copy the `record` folder in the `benchmark` directory to `benchmark\src\main\webapp\new_plot`. This data will be used to generate the plots. The already existing `record` folder may have older data.
2. Open `script.js`. Below the comment (`//Plotting data for linear algebra tests`, around line 94) there is a `d3.csv` function call, here change the csv file name as required.
3. Start a local web server- Open a `terminal` in this `benchmark\src\main\webapp\new_plot` directory. Enter the command `python -m http.server`.
4. Open a web browser. Enter the URL: `http://localhost:8000/index.html`. This should give a webpage with all the comparison plots.



**How to generate HTML plot (old code)**

1. Copy the `record` folder in the `benchmark` directory to `benchmark\src\main\webapp`. This data will be used to generate the plots.
2. Start a local web server- Open a `terminal` in this `benchmark\src\main\webapp` directory. Enter the command `python -m http.server`.
3. Open a web browser. Enter the URL: `http://localhost:8000/benchmark_chart.html`. This should give a webpage with all the comparison plots.