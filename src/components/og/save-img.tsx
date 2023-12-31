import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { IcDownload } from "../ui/icons";

type Props = {
  savePng: () => void;
};

export const SaveImg: React.FC<Props> = ({ savePng }) => {
  return (
    <Card>
      <CardContent className="flex py-4">
        <Button onClick={savePng}>
          <IcDownload className="mr-2 h-6 w-6" /> SAVE PNG
        </Button>
      </CardContent>
    </Card>
  );
};
