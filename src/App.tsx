import {
  WithStyles,
  createStyles,
  withStyles,
  MuiThemeProvider,
} from "@material-ui/core";
import React from "react";
import SideMenu from "components/SideMenu";
import { Provider } from "mobx-react";
import SensorStore from "stores/SensorStore";
import SensorsPage from "pages/SensorsPage";
import theme from "layout/Theme";

const styles = () =>
  createStyles({
    app: {
      backgroundImage: 'url("/background.png")',
      display: "flex",
      flexDirection: "row",
      minHeight: "100vh",
    },
    main: {
      flex: "1",
    },
  });

class App extends React.Component<WithStyles<typeof styles>> {
  private sensorStore: SensorStore;

  constructor(props: any) {
    super(props);
    this.sensorStore = new SensorStore();
  }

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <Provider sensorStore={this.sensorStore}>
          <div className={classes.app}>
            <SideMenu />
            <SensorsPage />
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
