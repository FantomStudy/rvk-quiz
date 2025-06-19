import { useQuery } from "@tanstack/react-query";

import { nominationListQuery } from "@entities/nomination";

export const useNominations = () => useQuery(nominationListQuery());
