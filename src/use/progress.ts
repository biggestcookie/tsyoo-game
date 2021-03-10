import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute, RouteParams } from "vue-router";
import { Store } from "../store";

export function useProgress() {
  const router = useRouter();
  const route = useRoute();
  const pageNumber = ref(0);
  const hasProgress = ref(false);

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
    if (!routeNumber) {
      router.push("/");
    }
    pageNumber.value = routeNumber;
    hasProgress.value = pageNumber.value <= Store.state.reachedPage;
  }

  return {
    pageNumber,
    hasProgress,
    setProgress,
  };
}
