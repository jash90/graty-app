import React, { useCallback } from 'react';
import { Button, Link } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { userState } from '../atoms';
import { useNavigate } from 'react-router-dom';

export default function ButtonLink({ children, to, mustBeAuth, mustBeLogout, mustBeRoot }: { children: any, to: string, mustBeAuth?: boolean, mustBeLogout?: boolean, mustBeRoot?: boolean }) {
    let visible = true;
    const user = useRecoilValue(userState);
    const navigate = useNavigate();

    const navigateToSite = useCallback(() => {
        navigate(to);
    }, [navigate, to]);

    if (mustBeAuth) {
        visible = !!user
    }
    else if (mustBeLogout) {
        visible = !user
    }
    else if (mustBeRoot) {
        visible = !!user?.admin
    }




    return (<>
        {visible && <Button variant="text">
            <Link sx={{ color: 'white' }} onClick={navigateToSite}>
                {children}
            </Link>
        </Button>}
    </>
    );
}
