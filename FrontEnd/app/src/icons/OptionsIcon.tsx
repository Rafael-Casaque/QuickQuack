import { Icon, IconProps } from "@chakra-ui/icon";

export const OptionsIcon = ({ ...props }: IconProps) => {
  return (
    <Icon version="1.1" viewBox="0 0 35 35" x="0px" y="0px" {...props}>
      <circle cx="16" cy="16" r="2" />
      <circle cx="6" cy="16" r="2" />
      <circle cx="26" cy="16" r="2" />      
    </Icon>
  );
};
