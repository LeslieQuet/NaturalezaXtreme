import { Box, Container, Stack, Text, Img, Wrap, WrapItem, Link, Avatar } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

import logo2 from "../../assets/logo-white-v3.png";
import seba from "../../assets/Imagen_perfil_seba.jpg";
import leslie from "../../assets/Leslie.jpeg";
import ley from "../../assets/LeilaSalguero.jpg";
import agustin from "../../assets/Agustin.jpeg";
import nicolas from "../../assets/nicolas.jpg";
import julieta from "../../assets/julieta.jpg";
import Vanina from "../../assets/Vanina.avif";
import Franco from "../../assets/Franco.jpeg";

export default function SmallWithLogoLeft() {
  return (
    <Box bg="blackAlpha.900">
      <Container
        as={Stack}
        maxW={"9xl"}
        h={"200"}
        py={8}
        direction={{ base: "column", md: "row" }}
        spacing={6}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Img src={logo2} alt="logo2" maxHeight={"200px"} width={300}></Img>
        <Text color={"white"}>© 2023 Nature Xtreme. All rights reserved</Text>

        <Wrap>
          <WrapItem>
            <Link href="https://www.linkedin.com/in/leslie-quetglas/" isExternal>
              <Avatar name="Leslie Quetglas" src={leslie} />
            </Link>
          </WrapItem>

          <WrapItem>
            <Link href="https://www.linkedin.com/in/sebastian-concheso-83b095246/" isExternal>
              <Avatar name="Sebastián Concheso" src={seba} />
            </Link>
          </WrapItem>

          <WrapItem>
            <Link href="https://www.linkedin.com/in/leilaaylensalguero/" isExternal>
              <Avatar name="Leila Salguero" src={ley} />
            </Link>
          </WrapItem>

          <WrapItem>
            <Link href="https://www.linkedin.com/in/agust%C3%ADn-d%C3%ADaz-garro/" isExternal>
              <Avatar name="Agustín Díaz Garro" src={agustin} />
            </Link>
          </WrapItem>

          <WrapItem>
            <Link href="https://www.linkedin.com/in/nicol%C3%A1s-florent%C3%ADn-a3771217a/" isExternal>
              <Avatar name="Nicolas Florentin" src={nicolas} />
            </Link>
          </WrapItem>

          <WrapItem>
            <Link href="https://www.linkedin.com/in/julieta-gimenez-348172a5/" isExternal>
              <Avatar name="Julieta Gimenez" src={julieta} />
            </Link>
          </WrapItem>

          <WrapItem>
            <Link href="https://www.linkedin.com/in/vanina-ramayo-643460264/" isExternal>
              <Avatar name="Vanina Ramayo" src={Vanina} />
            </Link>
          </WrapItem>

          <WrapItem>
            <Link href="https://www.linkedin.com/in/franco-rodriguez-375423264/?trk=contact-info" isExternal>
              <Avatar name="Franco Caserta" src={Franco} />
            </Link>
          </WrapItem>
        </Wrap>

        <Stack direction={"row"} spacing={6}>
          <Wrap spacing={8} pr={25}>
            <WrapItem color={"white"}>
              <Link href="https://github.com/LeyAylen6/NaturalezaXtreme" target="_blank">
                <FaGithub size={60} />
              </Link>
            </WrapItem>
          </Wrap>
        </Stack>
      </Container>
    </Box>
  );
}
