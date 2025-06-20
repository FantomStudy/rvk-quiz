import { useQuery } from "@tanstack/react-query";

import { nominationListQuery } from "@entities/nomination/model/nomination.queries";

export const useNominations = () => useQuery(nominationListQuery());
