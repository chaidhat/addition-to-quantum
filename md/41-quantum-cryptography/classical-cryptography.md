# Classical Cryptography

How do you communicate securely over a public channel?

Using a shared secret key! (Symmetric key encryption)

Let ciphertext $C$, plaintext $P$, and key $K$ be [[strings]] of bits $\{0,1\}^*$.
Let $E$ be an encryption [[functions|function]] and $D$ be a decryption [[functions|function]].

$$C=E(P, K)$$
$$P=D(C, K)$$

There are three people Alice, Bob and Eve where Alice is trying to send data to Bob over a public channel and Eve is listening to it and maliciously trying to obtain the data.

How do we securely share the secret key $K$ in the first place? Classically we use RSA or Diffie-Hellman, but this relies on
assumptions about hardness of a computational problem, which may not be hard for a quantum coputer.

In the quantum world, we use quantum key distribution (QKD) to securely share the secret key $K$ without Eve being able to intercept it.
