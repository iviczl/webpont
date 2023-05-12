<script setup>
import { computed } from 'vue';
import { reactive } from 'vue';

const isValid = computed(() => {
  return login !== '' && password !== ''
})
const login = reactive({ login: '', password: '' })
const handleSubmit = (login) => {

}
</script>

<template>
        <div className="col-3 mx-auto">
        <div className="text-center display-6">Login</div>
        <div className="justify-content-center pt-2">
          <div className="d-flex justify-content-between">
            <label htmlFor="userName" className="form-label">
              User name
            </label>
          </div>
          <input
            type="text"
            className="form-control"
            id="userName"
          />
        </div>
        <div className="justify-content-center pt-2">
          <div className="d-flex justify-content-between">
            <label htmlFor="password" className="form-label">
              Password
            </label>
          </div>
          <input
            type="password"
            className="form-control"
            id="password"
          />
        </div>
        <div className="col-3 mx-auto d-flex justify-content-center pt-4">
          <button
            type="button"
            className="btn btn-primary gap-2"
            :click="handleSubmit(login)"
            :disabled="!isValid"
          >
            Log in
          </button>
        </div>
      </div>

</template>