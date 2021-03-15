import { onMounted, ref, watch } from "vue";
import { RouteParams, useRoute, useRouter } from "vue-router";
import { Store } from "../store";

export function useProgress() {
  const router = useRouter();
  const route = useRoute();
  const pageNumber = ref(0);
  const hasReachedPage = ref(false);

  onMounted(() => {
    checkProgress(route.params);
  });

  watch(
    () => route.params,
    (newParams) => {
      checkProgress(newParams);
    }
  );

  function setProgress() {
    Store.setPageReached(pageNumber.value + 1);
  }

  function checkProgress(latestParams: RouteParams) {
    const routeNumber = Number(latestParams?.pageNumber);
    if (routeNumber < 1) {
      router.push("/");
    } else if (routeNumber > 5) {
      router.push("/final");
    }
    pageNumber.value = routeNumber;
    hasReachedPage.value = pageNumber.value <= Store.state.reachedPage;
  }

  return {
    pageNumber,
    hasReachedPage,
    setProgress,
  };
}
