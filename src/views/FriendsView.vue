<template>
  <div class="page friends">
    <h1>Friends</h1>
    <div class="invite-block">
      <h2>Send invite</h2>
      <van-button icon="bookmark-o" @click="copyToClipBoard" block type="primary">Copy link</van-button>
      <van-button icon="share-o" @click="share" block type="primary">Send to Telegram</van-button>
    </div>


    <!-- <PageSoon /> -->
    <PageLoading v-show="friendsStore.loading" />
    <div class="friends-list">
      <div class="friends-item" v-for="item in friendsStore.items" :key="item.id">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import PageLoading from "@/components/basic/PageLoading.vue";
// import PageSoon from "@/components/basic/PageSoon.vue";
import MissionItem from "@/components/MissionItem.vue";

import { useNotifyStore } from "@/stores/notify";
const notifyStore = useNotifyStore()

import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
import { useFriendsStore } from '@/stores/friends'
const friendsStore = useFriendsStore()

function share() {
  let url = encodeURIComponent(friendsStore.shareLink);
  let message = friendsStore.inviteText;
  window.Telegram.WebApp.openTelegramLink(`https://t.me/share/url?url=${url}&text=${message}`)
}

function copyToClipBoard() {
  let text = friendsStore.shareLink + "\n" + friendsStore.inviteText;

  const c = document.createElement("textarea");
  c.value = text ?? "",
    c.style.position = "absolute",
    c.style.opacity = "0",
    document.body.appendChild(c),
    c.select(),
    document.execCommand("copy"),
    c.remove()

  notifyStore.setSuccess({
    message: "Invitation copied\nSend the link to your friend!",
  });
}
// const tg = inject('tg');
// const backButton = window.Telegram.WebApp.BackButton;
onMounted(async () => {
  if (userStore.isLoggedIn) {
    await friendsStore.getFriends().then((response) => {
    }).catch((error) => {
      // console.log('11111111111e');
      // loadingError.value = "Please try again later";
    });
  }
});
</script>