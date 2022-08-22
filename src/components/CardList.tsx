import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

export interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [url, setUrl] = useState('');

  const handleOpenModal = (value: string): void => {
    setUrl(value);
    onOpen();
  };

  return (
    <>
      <SimpleGrid columns={3} spacing="40px">
        {cards.map(image => (
          <Card key={image.id} data={image} viewImage={handleOpenModal} />
        ))}
      </SimpleGrid>

      <ModalViewImage isOpen={isOpen} imgUrl={url} onClose={onClose} />
    </>
  );
}
