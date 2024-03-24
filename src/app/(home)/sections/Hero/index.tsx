import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';

import { Box, Flex, Logo, Magnetic, Split, Text } from '@/components';

import { SOCIAL_URL } from '@/utils/common/constant';

import * as S from './styles';

const Hero = () => {
  useGSAP(() => {});

  return (
    <S.HeroContent>
      <S.LeftColumn align="flex-end" gap="3rem">
        <S.HeroInfo>
          <Flex>
            {'Sênior'.split('').map((letter, i) => (
              <Magnetic key={i}>
                <span className="letter">{letter}</span>
              </Magnetic>
            ))}
          </Flex>

          <Flex>
            {'Frontend'.split('').map((letter, i) => (
              <Magnetic key={i}>
                <span className="letter">{letter}</span>
              </Magnetic>
            ))}
          </Flex>

          <Flex>
            {'Developer'.split('').map((letter, i) => (
              <Magnetic key={i}>
                <span className="letter">{letter}</span>
              </Magnetic>
            ))}
          </Flex>
        </S.HeroInfo>

        <Flex align="center" gap="6rem">
          <Flex align="center" gap="1.6rem">
            <Logo color="black" />
            <Flex direction="column">
              <Text color="gray200" weight={500} size="1.4rem">
                Daniel Silva
              </Text>
              <Text color="gray200" weight={500} size="1.4rem">
                Pintor de pixel
              </Text>
            </Flex>
          </Flex>

          <Flex align="center" gap="2.8rem" className="display-none">
            <Link
              href={SOCIAL_URL.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Split splitChildren="ig" fontSize="1.4rem" weight={500}>
                <Text color="gray200" weight={500} size="1.4rem">
                  ig
                </Text>
              </Split>
            </Link>

            <Link
              href={SOCIAL_URL.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Split splitChildren="lk" fontSize="1.4rem" weight={500}>
                <Text color="gray200" weight={500} size="1.4rem">
                  lk
                </Text>
              </Split>
            </Link>

            <Link
              href={SOCIAL_URL.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Split splitChildren="gh" fontSize="1.4rem" weight={500}>
                <Text color="gray200" weight={500} size="1.4rem">
                  gh
                </Text>
              </Split>
            </Link>

            <Link
              href={SOCIAL_URL.TWITTER}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Split splitChildren="tw" fontSize="1.4rem" weight={500}>
                <Text color="gray200" weight={500} size="1.4rem">
                  tw
                </Text>
              </Split>
            </Link>
          </Flex>
        </Flex>
      </S.LeftColumn>

      <S.RightColumn>
        <Box
          splitChildren={<Text color="gray200">React</Text>}
          area="react"
          icon={
            <Image
              src="images/svg/icons/react_icon.svg"
              alt="React logo"
              width={24}
              height={24}
              priority
            />
          }
        >
          <Text color="gray200">React</Text>
        </Box>

        <Box
          splitChildren={<Text color="gray200">Next</Text>}
          area="next"
          icon={
            <Image
              src="images/svg/icons/next_icon.svg"
              alt="Next logo"
              width={24}
              height={24}
              priority
            />
          }
        >
          <Text color="gray200">Next</Text>
        </Box>

        <Box
          splitChildren={<Text color="gray200">Node</Text>}
          area="node"
          icon={
            <Image
              src="images/svg/icons/node_icon.svg"
              alt="Node logo"
              width={24}
              height={24}
              priority
            />
          }
        >
          <Text color="gray200">Node</Text>
        </Box>
      </S.RightColumn>
    </S.HeroContent>
  );
};

export default Hero;
