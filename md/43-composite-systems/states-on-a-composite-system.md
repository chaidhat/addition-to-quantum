# States on a Composite System

Recall all the way back to what a [[ket-states|quantum state]] is.

A composite quantum state is a state that lives in a [[composite-system]].
Recall [[tensor-product]] of two Hilbert spaces $H_A$ and $H_B$.
A state on a composite system can be written as a sum of tensor products of states on the individual subsystems.

$$\left\lvert \psi \right\rangle=\sum_{ij} a_{ij}\left\lvert v_i  \right\rangle\otimes\left\lvert w_j \right\rangle\quad \in H_A\otimes H_B$$
Another way to notationally write this is
$$\boxed{\left\lvert \psi^{(AB)} \right\rangle=\sum_{ij} a_{ij}\left\lvert v_i \right\rangle_A\otimes\left\lvert w_j \right\rangle_B}$$
The following is a product state. For some $\left\lvert v^* \right\rangle\in H_A$ and $\left\lvert w^* \right\rangle\in H_B$, a product state can be written as a tensor product of the two states
$$\left\lvert \psi \right\rangle=\left\lvert v^* \right\rangle\otimes\left\lvert w^* \right\rangle\quad \left\lvert v^* \right\rangle\in H_A, \left\lvert w^* \right\rangle\in H_B$$
An entangled state is any state $\left\lvert \psi \right\rangle$ which is not a product state. This means it is not always possible to assign state vectors to individual subsystems.

Einstein famously called this "Spooky action at a distance."

Example 1

Let $\dim H_A = \dim H_B = 2$. Let
$$\left\lvert \psi_1 \right\rangle=\frac{1}{2}(\left\lvert 0,0 \right\rangle+\left\lvert 0,1 \right\rangle+\left\lvert 1,0 \right\rangle+\left\lvert 1,1 \right\rangle)$$
Note these are being tensor producted with each other but notation wise, we don’t write $\otimes$ for simplicity.
$$= \frac{1}{2}\big(|0\rangle |0\rangle + |0\rangle |1\rangle + |1\rangle |0\rangle + |1\rangle |1\rangle\big) \\
$$
$$= \frac{1}{2}\big(|0\rangle(|0\rangle + |1\rangle) + |1\rangle(|0\rangle + |1\rangle)\big)$$
$$= \frac{1}{2}(|0\rangle + |1\rangle)(|0\rangle + |1\rangle)$$
As $\left\lvert 0 \right\rangle+\left\lvert 1 \right\rangle$ forms a state inside $H_A$ and also $H_B$, this follows the form
$$\left\lvert \psi \right\rangle=\left\lvert v^* \right\rangle\left\lvert w^* \right\rangle\quad \left\lvert v^* \right\rangle\in H_A, \left\lvert w^* \right\rangle\in H_B$$

Example 2

Let
$$\left\lvert \psi_2 \right\rangle=\frac{1}{2}(\left\lvert 0,0 \right\rangle+\left\lvert 0,1 \right\rangle+\left\lvert 1,0 \right\rangle-\left\lvert 1,1 \right\rangle)$$
$$= \frac{1}{2}\big(|0\rangle |0\rangle + |0\rangle |1\rangle + |1\rangle |0\rangle - |1\rangle |1\rangle\big) \\
$$
$$= \frac{1}{2}\big(|0\rangle(|0\rangle + |1\rangle) + |1\rangle(|0\rangle - |1\rangle)\big)$$
$$= \frac{1}{2}\big(|0\rangle\left\lvert + \right\rangle+\left\lvert 1 \right\rangle\left\lvert - \right\rangle\big)$$
This does not follow the form
$$\left\lvert \psi \right\rangle=\left\lvert v^* \right\rangle\left\lvert w^* \right\rangle\quad \left\lvert v^* \right\rangle\in H_A, \left\lvert w^* \right\rangle\in H_B$$
This is not written cleanly as a product of two product states in $H_A$, $H_B$ respectively. Hence it is entangled.

### Checking if a state is entangled

To check if a state is entangled, this is an easy way to do it.
Let this be the state that we want to check if it is entangled.
$$a_{11}\left\lvert v_1,w_1 \right\rangle+a_{12}\left\lvert v_1, w_2 \right\rangle+a_{21}\left\lvert v_2, w_1 \right\rangle + a_{22}\left\lvert v_2, w_2 \right\rangle$$
Does it follow in this form
$$(a_1\left\lvert v_1 \right\rangle+a_2\left\lvert v_2 \right\rangle)\otimes(b_1\left\lvert w_1 \right\rangle+b_2\left\lvert w_2 \right\rangle)$$
To have a solution
$$a_{11} = a_1b_1$$
$$a_{21} = a_2b_1$$
$$a_{12} = a_1b_2$$
$$a_{22} = a_2b_2$$
$$a_{11}a_{22}-a_{12}a_{21}=a_1b_1a_2b_2-a_1a_2a_2b_1=0$$
Must all be true.

Hence
$$\text{product state} \Leftrightarrow \det\begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix}=0$$
