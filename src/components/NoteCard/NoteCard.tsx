import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Note } from "@/types/note.types";
import DeleteNote from "../DeleteNote/DeleteNote";

interface Props extends Note {
  withRemove?: boolean;
}

const NoteCard = ({ id, title, content, withRemove }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-line">{content}</p>
      </CardContent>
      <CardFooter>{withRemove && <DeleteNote id={id} />}</CardFooter>
    </Card>
  );
};

export default NoteCard;
