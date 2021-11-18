import { useState, useEffect } from 'react';
import { EnvVar } from '../../../utils';
import { useEnv } from '../../../contexts';
import { Menu } from '../../../models';

export const useMenu = () => {
  const env = useEnv();
  const apiUrl = env.get(EnvVar.API_URL);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<unknown>();
  const [menu, setMenu] = useState<Menu>();

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${apiUrl}/menu`);

        if (!response.ok) {
          const message = `Error: ${response.status}`;
          throw new Error(message);
        }

        const menus = await response.json();
        setMenu(menus);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchMenus();
  }, [apiUrl]);

  return { isLoading, isError, error, menu };
};
