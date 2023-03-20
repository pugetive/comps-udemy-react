import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button primary rounded>
          Click me!
        </Button>
      </div>
      <div>
        <Button success>Buy now</Button>
      </div>
      <div>
        <Button warning outline>
          See deal!
        </Button>
      </div>
      <div>
        <Button danger>Hide ads</Button>
      </div>
      <div>
        <Button secondary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
