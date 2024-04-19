import { Card, CardBody, CardHeader, Heading } from "@yamada-ui/react";

type Props = {
  title: string;
  value: string;
};

const RecordCard = ({ title, value }: Props) => {
  return (
    <Card width="240px" variant="solid">
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody fontSize="3xl">{value}</CardBody>
    </Card>
  );
};

export default RecordCard;
