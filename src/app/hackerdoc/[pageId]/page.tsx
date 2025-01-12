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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HACKERDOC | The Midwest Block-Thon",
  description: "View the HackerDoc for the Midwest Block-a-Thon.",
  openGraph: {
    title: "HACKERDOC | The Midwest Block-a-Thon",
    description: "View the HackerDoc for the Midwest Block-a-Thon, a 20-hour hackathon hosted by the KU Blockchain Institute.",
    url: "https://hack.kublockchain.com/hackerdoc",
    type: "website",
  },
};

// TEST WITH hackerdoc/067dd719a912471ea9a3ac10710e7fdf
// real hackerdoc: 151dd445c69b80098be5f78f9a6b5ae2


async function Page({ params }: { params: Promise<{ pageId: string }> }) {
  // asynchronous access of `params.id`.
  const pageId = (await params).pageId;
  const recordMap = await notion.getPage(pageId);

  return (
    <>
      <Loading />
      <Navbar />
      <Box
        pt={{ base: "20vh", md: "25vh" }}
        mx={{ base: "0", md: "0", lg: "5vw" }}
        pb={10}
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