import notion from '@/utils/notion'
import { NotionPage } from '@/components/NotionPage'
import {
  rootDomain,
  rootNotionPageId,
  rootNotionSpaceId
} from '@/utils/config'
import Navbar from '@/components/Navbar'
import Loading from '@/components/Loading'
import { Box, Heading } from '@chakra-ui/react'


// TEST WITH hackerdoc/067dd719a912471ea9a3ac10710e7fdf
// real hackerdoc: 151dd445c69b80098be5f78f9a6b5ae2

interface PageProps {
  params: {
    pageId: string; // dynamic parameter
  };
}

async function Page({ params }: PageProps) {
  // asynchronous access of `params.id`.
  const { pageId } = await params;
  const recordMap = await notion.getPage(pageId);

  return (
    <>
      <Loading />
      <Navbar />
      <Box
        //maxW="800px"
        //mx="auto"
        //py="8"
        //px="4"
        //textAlign="center"
        //fontSize="xl"
        pt={{ base: "20vh", md: "25vh" }}
      >
        <Heading textAlign="center" size="3xl" mb={4} fontWeight="bold" fontStyle="italic">
          HACKERDOC
        </Heading>
        {recordMap &&
        <NotionPage
          recordMap={recordMap}
          rootDomain={rootDomain ?? ''}
          rootPageId={rootNotionPageId}
        />
        }
      </Box>
    </>
  )
}

export default Page;