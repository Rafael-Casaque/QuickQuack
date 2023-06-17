import { Icon, IconProps } from "@chakra-ui/icon";

export const UserIcon = ({ ...props }: IconProps) => {
  return (
    <Icon version="1.1" viewBox="0 0 24 24" x="0px" y="0px" {...props}>
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"></path>
    </Icon>
  );
};
