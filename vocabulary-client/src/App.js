import './App.css';
import Grid from '../node_modules/@material-ui/core/Grid';
import Header from './Components/Header';
import WordList from './Components/WordList';


function App() {
  return (
    <Grid container direction="column">
      <Grid item>
          <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
            <WordList />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
      </Grid>
  );
}

export default App;
