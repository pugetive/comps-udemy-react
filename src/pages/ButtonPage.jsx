import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from ".,/components/Button";

function ButtonPage() {
  function handleClick() {
    console.log("had a click");
  }

  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick} className="mb-5">
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button success>
          <GoCloudDownload />
          Buy now
        </Button>
      </div>
      <div>
        <Button warning outline>
          <GoDatabase />
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

export default ButtonPage;
