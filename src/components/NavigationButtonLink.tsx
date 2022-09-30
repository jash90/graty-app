import React, { useCallback } from "react";
import { Button, Link } from "@mui/material";
import { useRecoilValue } from "recoil";
import { userState } from "../atoms";
import { useNavigate } from "react-router-dom";

export default function NavigationButtonLink({
  children,
  to,
  mustBeAuth,
  mustBeLogout,
  mustBeRoot,
  onClick,
}: {
  children: any;
  to?: string;
  mustBeAuth?: boolean;
  mustBeLogout?: boolean;
  mustBeRoot?: boolean;
  onClick?: Function;
}) {
  let visible = true;
  const user = useRecoilValue(userState);
  const navigate = useNavigate();

  const navigateToSite = useCallback(() => {
    if (!!onClick) {
      onClick();
    } else if (!!to) {
      navigate(to);
    }
  }, [navigate, to, onClick]);

  if (mustBeAuth) {
    visible = !!user;
  } else if (mustBeLogout) {
    visible = !user;
  } else if (mustBeRoot) {
    visible = !!user?.admin;
  }

  return (
    <>
      {visible && (
        <Button variant='text'>
          <Link sx={{ color: "white" }} onClick={navigateToSite}>
            {children}
          </Link>
        </Button>
      )}
    </>
  );
}
