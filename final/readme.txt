Dependencies
  This project relies on D3 and a JSON file. The data file must include a target terms as keys and an array of duo arrays representing co-occuring words and counts.

Features and Scope

  *Dynamic data interaction
  The primary features of the page are generated based on a JSON data file. The data is read-in any time the page is served.

  *drop down menu
  The drop down menu is created based on the key words in the JSON file. Users can select a term from the list, which will determine the content in the chart area.

  *bar graphs
  When a user selects a term from the drop down menu, a bar graph is generated on the page representing co-occuring words and counts.

  *text labels
  The text labels on the bar chart area are SVG elements. These text labels are currently created through a simple loop. Future development will use D3 axis features for more effective labeling.


Limits
  *data file
  Currently, the visualizations draw on a single data file. It will be possible, in future iterations of the project to generate visualizations from multiple data-files representing different corpora or sub-corpora. It may also be desirable to create the data-sets directly from the corpora instead of relying on pre-processed data. 

  *Axis and Labels
  Currently, the charts are generated based on the first 8 co-occuring temrs in the JSON file. This is an arbitrary decision based on the page design and limited familiarity with D3. D3 has features for handling the creation of axis and labels that are more responsive and dynamic than the current version. Using the D3 features will ensure that the labels are better positioned, that the labels don't overlap, and that the scale is dependent on the data instead of a predetermined number of terms.

  *Responsive size
  D3 is capable of adjusting the area of elements to fit based on the number of data points that need to be included. Currently, every chart has a set amount of space. Future iterations need to account for variations in the quantity of data.

  *Chart types/multiple terms for comparison
  To fully achieve the goals of this project, additional chart types need to be available and users need the option to view multiple charts or recombine data on a single chart for comparison purposes. Future iterations will explore the ways D3 can enable users to make comparisons or to re-visualize data in a variety of ways.
