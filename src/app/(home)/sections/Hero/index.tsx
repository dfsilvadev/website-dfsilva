import { Flex, Logo, Magnetic, Split, Text } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

import { SHAPES } from './mock';

import { SOCIAL_URL } from '@/utils/common/constant';

import * as S from './styles';

const Hero = () => {
  return (
    <S.HeroContent>
      <S.HeroOccupation align="center" justify="center">
        <S.HeroInfo>
          <Flex>
            {'Sênior'.split('').map((letter, i) => (
              <Magnetic key={i}>
                <span>{letter}</span>
              </Magnetic>
            ))}
          </Flex>
          <Flex justify="flex-end">
            {'Frontend'.split('').map((letter, i) => (
              <Magnetic key={i}>
                <span>{letter}</span>
              </Magnetic>
            ))}
          </Flex>
          <Flex>
            {'Developer'.split('').map((letter, i) => (
              <Magnetic key={i}>
                <span>{letter}</span>
              </Magnetic>
            ))}
          </Flex>

          {SHAPES.map((item, i) => (
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              style={item.style}
              key={i}
            />
          ))}
        </S.HeroInfo>
      </S.HeroOccupation>

      <S.HeroFooter align="center" justify="space-between">
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

          <Flex align="center" gap="2rem">
            <Split splitChildren="React" fontSize="1.4rem" weight={500}>
              <Text color="gray200" weight={500} size="1.4rem">
                React
              </Text>
            </Split>

            <Split splitChildren="Next" fontSize="1.4rem" weight={500}>
              <Text color="gray200" weight={500} size="1.4rem">
                Next
              </Text>
            </Split>

            <Split splitChildren="Node" fontSize="1.4rem" weight={500}>
              <Text color="gray200" weight={500} size="1.4rem">
                Node
              </Text>
            </Split>
          </Flex>
        </Flex>

        <Flex align="center" gap="2rem" className="display-none">
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
      </S.HeroFooter>
    </S.HeroContent>
  );
};

export default Hero;
