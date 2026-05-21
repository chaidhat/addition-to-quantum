# BB84 Protocol

This is a type of quantum key distribution protocol. It is named after Bennett and Brassard in 1984.

Alice chooses a basis $b$ (subset of the [<span class="underline">Pauli matrices</span>](#pauli-matrices)) and a bit $p$ (i.e., parent)
$$b\in\{X,Z\}
    \quad
    p\in\{0,1\}$$

We know there are an infinite number of possible bases in a qubit. There exists three mutually unbiased bases in a qubit $\{Z,X,Y\}$. BB84 chooses $\{X,Z\}$ as part of the definition of the protocol.

Because a qubit is $d=2$ by definition, we can only choose from 2 parents.

Alice then creates a qubit state $\left\lvert \psi_{b,p} \right\rangle$ to send to Bob.
BB84 defines the following mapping:

   basis $b$   parent $p$  qubit state $|\psi_{b,p}\rangle$
  ----------- ------------ ----------------------------------------------------------
      $Z$         $0$      $|0\rangle$
      $Z$         $1$      $|1\rangle$
      $X$         $0$      $|+\rangle = \tfrac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$
      $X$         $1$      $|-\rangle = \tfrac{1}{\sqrt{2}}(|0\rangle - |1\rangle)$

Example

To generate a shared key, Alice chooses a string of random bases $\in\{X,Z\}^n$ and parents $\in\{0,1\}^n$ to create a string of qubit $\left\lvert \psi_{b,p} \right\rangle$ to send to Bob. Where $n$ is the number of bits to send.

  ---------------------------- ------------- ------------- ------------- ------------- ------------- ------------- ------------- -------------
           basis $b$                $X$           $Z$           $Z$           $X$           $Z$           $X$           $X$           $Z$
           parent $p$               $1$           $0$           $1$           $1$           $0$           $1$           $0$           $1$
   qubit $|\psi_{b,p}\rangle$   $|-\rangle$   $|0\rangle$   $|1\rangle$   $|-\rangle$   $|0\rangle$   $|-\rangle$   $|+\rangle$   $|1\rangle$
  ---------------------------- ------------- ------------- ------------- ------------- ------------- ------------- ------------- -------------

Bob chooses a string of random bases $\in\{X,Z\}^n$ and measures the $i$-th qubit Alice sent in the $i$-th base.

    Bob’s basis $b'$         $X$           $X$           $Z$           $Z$           $X$           $Z$           $X$           $Z$
  --------------------- ------------- ------------- ------------- ------------- ------------- ------------- ------------- -------------
     example result      $|-\rangle$   $|-\rangle$   $|1\rangle$   $|0\rangle$   $|+\rangle$   $|1\rangle$   $|+\rangle$   $|1\rangle$
           or            $|-\rangle$   $|+\rangle$   $|1\rangle$   $|1\rangle$   $|-\rangle$   $|0\rangle$   $|+\rangle$   $|1\rangle$
   inferred parent (?)       $1$           $1$           $1$           $0$           $0$           $1$           $0$           $1$
      correct basis                                                                                                       
       secret key            $1$                         $1$                                                     $0$           $1$

Alice and Bob both announce their basis but not their measurement results. Correct basis for half the qubits. Then use the subsequence as the secret key $K$.

$$K = 1101$$

Alice and Bob then agree on a random subset $T\subset K$. They publicly announce their bit values only at positions in $T$.

$$QBER=\frac{\text{number of pos. in $T$ where bits differ}}{|T|}$$

If quantum bit error rate QBER is lower than the threshold, then proceed with the remaining bits not in $T$. In BB84, the threshold is typically around 11% because of Shannon-theoretic entropy.

This is secure against Eve as if Eve intercepts a qubit, Eve can only distinguish among $\{\left\lvert 0 \right\rangle,\left\lvert 1 \right\rangle,\left\lvert + \right\rangle,\left\lvert - \right\rangle\}$
where error probability $P_E\geq 1-\frac{d}{N}$ given in [<span class="underline">basic decoding theory</span>](#basic-decoding-theory).

If Eve sends qubit along to Bob, they would be wrong half of the time. Alice and Bob can find out in the testing stage. During testing stage, some bits of the key are sent between Alice and Bob and discarded if they do not match. This reduces information that Eve has about the secret key. The probability of the bit disagreeing given Eve intercepted is $\frac{1}{2}\times\frac{1}{2}=\frac{1}{4}$ whereas if Eve doesn’t intercept, the probability of the bit disagreeing is $0$.

Due to the [<span class="underline">no-cloning theorem</span>](#no-cloning-theorem), Eve cannot copy the qubit and send it to Bob.
