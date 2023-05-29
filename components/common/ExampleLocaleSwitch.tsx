import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';

const ExampleLocaleSwitch = () => {
  const router = useRouter();

  const handleLocaleChange = () => {
    const value = router.locale === 'fr' ? 'en' : 'fr';

    router.push(router.route, router.asPath, {
      locale: value,
    });
  };

  return (
    <Button size='sm' variant='solid' colorScheme='blue' onClick={handleLocaleChange}>
      {router.locale === 'en' ? 'Switch to French' : 'Switch to English'}
    </Button>
  );
};

export default ExampleLocaleSwitch;
